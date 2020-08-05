import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, interval, concat } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent,HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User,  Conversation } from '../modals/respons';
import { tap, timeInterval, map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { element } from 'protractor';
import { IUser } from './ngrx/users.interface';

@Injectable({
  providedIn: 'root'
})
export class SlakServiceService{


  readonly usersPATH:string = 'users';
  readonly postsPATH:string = 'postes';
  userCollection:AngularFirestoreCollection;
  postCollection:AngularFirestoreCollection;
   newUser: IUser;
   newUserObs:Observable<User>;
  userCorrentBeh:BehaviorSubject<IUser>  = new BehaviorSubject(this.newUser);
  usersArr:BehaviorSubject<User[]> = new BehaviorSubject(null);
  userCorrentSubj:Subject<User> = new Subject();

  newPost:Conversation = new Conversation();

  postCorrent:BehaviorSubject<Conversation> = new BehaviorSubject(this.newPost);
  postArr:BehaviorSubject<Conversation[]> = new BehaviorSubject(null);
  timeCurrent:BehaviorSubject<string> = new BehaviorSubject(null);


  private clock: Observable<Date>;

  time:Date = new Date();

  seconds = interval(1000);
  


  
 

  constructor(
    private fs:AngularFirestore) {   
    
   this.userCollection = this.fs.collection(this.usersPATH);
   this.postCollection = this.fs.collection<Conversation>(this.postsPATH);

   

  
   
   this.clock = this.seconds.pipe(
    map(tick => new Date()),
   )
   this.clock.subscribe(res =>{
      this.timeCurrent.next(res.toLocaleTimeString())
    })
   
}

getUsers(){
  this.userCollection.valueChanges()
  .subscribe(res =>
      this.usersArr.next(res as User[])
  )
}

getPostes(): Observable<Conversation[]>{
  this.postCollection.valueChanges()
  .subscribe(res =>
      this.postArr.next(res as Conversation[])
  )
  return this.postArr
}


 login(user:IUser){
   this.fs.collection(this.usersPATH, ref => ref
    .where('mail', '==', user.mail)
    .where('password', '==', user.password)
   ).valueChanges()
   .pipe(
     tap(res =>{
       console.log(res);
       
      //  this.newPost.me = {...res[0] as IUser};
      //  this.addPost({...this.newPost})
       }),
   )
   .subscribe(res => this.userCorrentBeh.next(res[0] as IUser))
 }


 addPost(post:Conversation){
      
      let currentId = '';
      let currentTime = this.time.toLocaleTimeString();
      post.createTime = currentTime;

       this.postCollection.add(post).then(res =>{
        console.log(res.id);
        currentId = res.id
        console.log(currentId)
       
        
        this.postCollection.doc(`${currentId}`)
        .snapshotChanges().pipe(
          map(res =>{
            console.log(res.payload.id);
            
             const id = res.payload.id;
             return {id, ...res.payload.data() as Conversation} 
           })
        ).subscribe(res =>{
        this.postCorrent.next(res)
         })
      })

 } ;
      

 setPost(post:Conversation){
  
  console.log(post.id)
     this.postCollection.doc(`${post.id}`).update(post).then(res =>
    console.log(res)
       )

       this.postCollection.doc(`${post.id}`)
       .valueChanges().subscribe(res =>{
        console.log(res)
          this.postCorrent.next(res as Conversation)
        })
 }



}









