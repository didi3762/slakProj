import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { SlakServiceService } from 'src/app/services/slak-service.service';
import { Observable, Subscription, Subject, BehaviorSubject, merge, concat } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User,  Conversation  } from 'src/app/modals/respons';
import { SortService } from 'src/app/services/ngrx/sort.service';
import { IUser, IStateUsers } from 'src/app/services/ngrx/users.interface';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'chet',
  templateUrl: './chet.component.html',
  styleUrls: ['./chet.component.css']
})
export class ChetComponent implements OnInit , OnDestroy ,OnChanges,AfterViewInit{

  userCorrent:Observable<IUser>;
  userCorrentLocalStorge:IUser 
  userCorrentLocalStorge2:IUser 
  userCorrentSubj:BehaviorSubject<User> = new BehaviorSubject(null);
  usersArr:Observable<User[]>;


  postCorrent:Observable<Conversation>;
  postArr:Observable<Conversation[]>;
  timeOb:Observable<string>;
  subs:Subscription;
  userCorrent2:IUser = {
    islogin:true,
    name:"",
    mail: '', 
    password: ''
}
  
  postCorrent2:Conversation = new Conversation();
  timeString:string

  merge:Observable<IUser>

  usersStore:Observable<string[]>
  usersArr2:User[] = []
  postArr2:Conversation[]= []

  itemCollection:AngularFirestoreCollection
  messeges:string[] = ['ברוך הבא']
  newPost:Conversation = new Conversation();

  


  constructor(private fireS:AngularFirestore, private usersService:SlakServiceService, private storeService:SortService) { 
   
    

    this.userCorrentLocalStorge = JSON.parse(localStorage.getItem('userCurrent') );
    this.userCorrentSubj.next(this.userCorrentLocalStorge)
    this.userCorrentSubj.pipe(

    )
      console.log(this.userCorrentLocalStorge);
    
    this.userCorrent2 = this.storeService.currentUser
    // console.log();
    
    this.userCorrent = this.storeService.currentUserSub
   this.merge = concat(this.userCorrent,this.userCorrentSubj).pipe(
      map(res =>{
        this.userCorrentLocalStorge = JSON.parse(localStorage.getItem('userCurrent') )
        return this.userCorrentLocalStorge
        }),
    )
    this.userCorrent.pipe(
      map(res => {
        return  JSON.parse(localStorage.getItem('userCurrent') )
       })
       )
    .subscribe(res =>{
      this.userCorrentLocalStorge = res
      console.log(res)
      
    }) 
    
   
   


    this.postCorrent = this.usersService.postCorrent
    this.postArr = this.usersService.getPostes()

    this.timeOb = this.usersService.timeCurrent

    this.timeOb.subscribe( res =>
        this.timeString = res
    )

    this.postArr.subscribe(res =>{
      console.log(res);
      this.postArr2 = res
     } )
    
    
      


    

    this.postCorrent.subscribe( res =>{
        this.postCorrent2 = res
        // this.postArr2.push(this.postCorrent2)
        console.log(this.postArr2);
        
    })
    
  }
  

  ngOnChanges(){
    // this.storeService.currentUserSub.next(JSON.parse(localStorage.getItem('userCurrent') ))
  }
 

  ngOnInit(): void {
    this.storeService.currentUserSub.next(JSON.parse(localStorage.getItem('userCurrent') ))
  }

  ngAfterViewInit(){
    // this.storeService.currentUserSub.next(JSON.parse(localStorage.getItem('userCurrent') ))
  }

  ngOnDestroy(): void {

  }

  

  addPost(){
    this.postCorrent.subscribe( res =>{
      this.postCorrent2 = res
      // this.postArr2.push(this.postCorrent2)
      console.log(this.postArr);
      
  })
  }

  addMessage(val:string){
    console.log(this.newPost);
    
    this.postCorrent2.messeges.push(val);
    this.usersService.setPost({...this.postCorrent2});
 }

  

}
