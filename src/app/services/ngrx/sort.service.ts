import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { tap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { currentUserSelector, userCurrent } from './users.selector';
import { IUser, IStateUsers } from './users.interface';
import { addUsers, loginData } from './event';
import { Conversation } from 'src/app/modals/respons';
import { SlakServiceService } from '../slak-service.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  readonly usersPATH:string = 'users';
  userCollection:AngularFirestoreCollection;
  currentUser:IUser
  currentUserSub:Subject<IUser> = new Subject();
  userCorrentLocalStorge: any;

  newPost:Conversation = new Conversation();


  constructor(private fs:AngularFirestore,
    private svc:SlakServiceService, 
    private store:Store<IStateUsers>,) { 

      this.userCollection = this.fs.collection(this.usersPATH);
        this.store
    .subscribe(res=>{
      console.log(res.users)
      
    // localStorage.setItem('userCurrent', JSON.stringify(res.users[0] || null))
    
      });

      this.currentUserSub.next(JSON.parse(localStorage.getItem('userCurrent') ))

    
  }


  login(user:IUser){
    this.fs.collection(this.usersPATH, ref => ref
     .where('mail', '==', user.mail)
     .where('password', '==', user.password)
    ).valueChanges({idFaild:'id'})
    .pipe(
      tap(res =>{
        console.log(res);
        this.getCurrentUser();
        localStorage.setItem('userCurrent', JSON.stringify(res[0]) || null)
        this.newPost.me = {...res[0] as IUser};
        this.addPost({...this.newPost})
        }),
    )
    .subscribe(res => {
      this.currentUserSub.next(res[0] as IUser)
      
      this.userCorrentLocalStorge = JSON.parse(localStorage.getItem('userCurrent') );
      this.store.dispatch( loginData( {loginData:res[0] as IUser} ))
      })
  }

getCurrentUser():Observable<IUser>{
 this.store.pipe(
   select(userCurrent)
   ).subscribe(res=>{
  this.currentUser = res
  
       console.log(res)

  });
  
  return this.store.pipe(select(userCurrent));
}


addPost(post:Conversation){
      
  let currentId = '';
  let currentTime = this.svc.time.toLocaleTimeString();
  post.createTime = currentTime;

   this.svc.postCollection.add(post).then(res =>{
    console.log(res.id);
    currentId = res.id
    console.log(currentId)
   
    
    this.svc.postCollection.doc(`${currentId}`)
    .snapshotChanges().pipe(
      map(res =>{
        console.log(res.payload.id);
        
         const id = res.payload.id;
         return {id, ...res.payload.data() as Conversation} 
       })
    ).subscribe(res =>{
    this.svc.postCorrent.next(res)
     })
  })

} ;

}
