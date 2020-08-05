import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router, NavigationStart, Scroll } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { SlakServiceService } from 'src/app/services/slak-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/modals/respons';
import { SortService } from 'src/app/services/ngrx/sort.service';

@Component({
  selector: 'siginin',
  templateUrl: './siginin.component.html',
  styleUrls: ['./siginin.component.css']
})
export class SigininComponent implements OnInit {
  




formSign:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
})

  

  formToS = {headerS:"Sign in to your workspace", placeHOW:"your workspace",placeHOP:"your password", bouttnP:"Sigin in",showP:true, type:"enter"}
  forms = {
    "0" : {headerS:"הכנס לחשבון הסלאק שלך", placeHOW:"שם המשתמש שלך",placeHOP:"הסיסמא שלך", bouttnP:"הכנס",showP:true, type:"enter"},
    "1" : {headerS:"צור את החשבון שלך", placeHOW:"בחר שם משתמש",placeHOP:"בחר סיסמא", bouttnP:"צור",showP:false, type:"add"}
}

  items:Observable<any[]>
  itemCollection:AngularFirestoreCollection
  private subs:Subscription[] = []

  constructor(private fireS:AngularFirestore, private storSeevice:SortService, private route: ActivatedRoute, private mySvc:SlakServiceService) { 

    this.itemCollection = fireS.collection('users');
     
    route.params.subscribe(p => {console.log(p);
     this.formToS = this.forms[p['id']]})

  }

  ngOnInit() {

    this.items = this.itemCollection.valueChanges();

    console.log(this.formToS);
    
  }

  add(){
    
    this.itemCollection.add(this.formSign.value);
    this.enter()
    this.formSign.reset();
    
  }

  enter() {
   
    this.storSeevice.login(this.formSign.value)
   
    this.formSign.reset();
  }

  onSubmit(type){

    if(type==this.forms[0].type) {
      this.enter();
    }

    if(type==this.forms[1].type) {
      this.add();
    }


  }

 
  
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe()) 
  }

  

 

  

  

}

@Injectable({providedIn:'root'})
export class SigininGuardService implements CanActivate {

  islogin:boolean = false

  constructor(public router: Router) {

  }

  canActivate(aaaa): boolean {
    if(this.islogin){
      // this.router.navigate(['chet']);
      return false
    }
    return true;
  }

}



