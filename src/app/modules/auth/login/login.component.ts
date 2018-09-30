import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   
    public model: any;
    constructor(private authService:AuthService,private router:Router){
      this.model = {email: "", password:""};
    }
    
    ngOnInit(): void {
        
    }

    onSubmit(){
        this.authService.logout();
        this.authService.login(this.model.email,this.model.password)
        .subscribe((res)=>{
            if(res.success){
              this.router.navigate(['']);
            }
        });
    }

}
