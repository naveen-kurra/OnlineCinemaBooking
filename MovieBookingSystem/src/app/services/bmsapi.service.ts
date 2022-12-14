import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Injectable()
export class bmsApiService {
    baseUrl = "http://localhost:1785/api/";

    constructor(private httpClient: HttpClient) { }

    //checking api call
    //get method example without parameters 
    getcomments(): Observable<any> {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    }

    //get method example with parameters
    getcommentsByParameter(postId:any): Observable<any> {
        let params1 = new HttpParams().set('postId',postId);
        return this.httpClient.get("https://jsonplaceholder.typicode.com/comments",{params:params1});
    }

    //get method example with parameters 2
    getcommentsByParameter2(postId:any): Observable<any> {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/comments?postId="+postId);
    }

    //post example (creates a new entry)
    post(opost:any): Observable<any> {
        return this.httpClient.post("https://jsonplaceholder.typicode.com/posts",opost);
    }

     //put example (updates the existing entry)
     bmsput(opost:any): Observable<any> {
        return this.httpClient.post("https://jsonplaceholder.typicode.com/posts/"+opost.id,opost);
    }

    putdata(data:any): Observable<any> {
        console.log(this.baseUrl+"user",data);
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        console.log(headers," headers");
        return this.httpClient.post("http://localhost:9191/api/user",JSON.parse(data),{'headers':headers});
    }

    //login cred api call goes here
    validateUser(cred:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/LoginUser",JSON.parse(cred),{'headers':headers});
    }

    //register user api name has to be changed.edit
    registerUser(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/SignUp",JSON.parse(user),{'headers':headers});
    }

     //verify OTP
     verifyOTP(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/verifyuser",JSON.parse(user),{'headers':headers});
    }

    verfiedUser(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/sendstatus",JSON.parse(user),{'headers':headers});
    }

    getOrderHistory(email:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/orderhistory",JSON.parse(email),{'headers':headers});
    }

    changePassword(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/updatepassword",JSON.parse(user),{'headers':headers});
    }

    getUserData(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/getuserdetails",JSON.parse(user),{'headers':headers});
    }

    editProfile(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/editprofile",JSON.parse(user),{'headers':headers});
    }

    forgotPasswordEmail(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/verifyforgotpassword",JSON.parse(user),{'headers':headers});
    }

    forgotPasswordOTP(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/forgotpasswordstat",JSON.parse(user),{'headers':headers});
    }

    updateforgotPassword(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/fpasssucess",JSON.parse(user),{'headers':headers});
    }

    adminReg(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/newadmin",JSON.parse(user),{'headers':headers});
    }

    adminLogin(user:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/adminlogin",JSON.parse(user),{'headers':headers});
    }
    // add promotion api call
    addPromotion(promotion:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/addpromotion",JSON.parse(promotion),{'headers':headers});
    }

    sendPromotion(promotion:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/sendpromotion",JSON.parse(promotion),{'headers':headers});
    }

    deletePromotion(promotion:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/deletepromotion",JSON.parse(promotion),{'headers':headers});
    }

    updatePromotion(promotion:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/updatepromotion",JSON.parse(promotion),{'headers':headers});
    }

    addMovie(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/addmovie",JSON.parse(data),{'headers':headers});
    }

    scheduleMovie(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/schedulemovie",JSON.parse(data),{'headers':headers});
    }

    getAllPromos(): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        // return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
        return this.httpClient.get("http://localhost:1785/admin/getallpromos",{'headers':headers});
    }
    getmovieinfo(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        // return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
        return this.httpClient.post("http://localhost:1785/admin/getmoviedetails",JSON.parse(data),{'headers':headers});
    }

    
    
    getscheduleinfo(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/homepage/getscheduleinfo",JSON.parse(data),{'headers':headers});
    }

    getMoviesList(): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get("http://localhost:1785/homepage/getallmovie",{'headers':headers});
    }
    schedulemovie(): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get("http://localhost:1785/homepage/schedulemovie",{'headers':headers});
    }
    getFirstName(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/getuserdetails",JSON.parse(data),{'headers':headers});
    }

    getAllusers(): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get("http://localhost:1785/api/allusers",{'headers':headers});
    }

    setUserStatus(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/chnageuserstatus",JSON.parse(data),{'headers':headers});
    }

    addCards(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/addpayment",JSON.parse(data),{'headers':headers});
    }
    addseats(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/addseats",JSON.parse(data),{'headers':headers});
    }

    update3Cards(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/updatecard",JSON.parse(data),{'headers':headers});
    }

    retriveCards(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/retriveCards",JSON.parse(data),{'headers':headers});
    }

    getmoviePic(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/homepage/getmovieimage",JSON.parse(data),{'headers':headers});
    }

    promoCheck(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/homepage/promopercentage",JSON.parse(data),{'headers':headers});
    }

    ticketBooked(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/savebooking",JSON.parse(data),{'headers':headers});
    }

    getseats(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/homepage/selectseats",JSON.parse(data),{'headers':headers});
    }
    updateseats(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/homepage/updateseat",JSON.parse(data),{'headers':headers});
    }
    deleteCard(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/deletecard",JSON.parse(data),{'headers':headers});
    }
    resendotp(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/api/resendotp",JSON.parse(data),{'headers':headers});
    }
    archiveMovie(data:any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("http://localhost:1785/admin/archivemovie",JSON.parse(data),{'headers':headers});
    }

}