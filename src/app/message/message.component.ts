import { Component, Input, OnInit } from '@angular/core';
import { Message } from './message';


@Component({
  moduleId : module.id,
  selector: 'message',
  templateUrl: 'message.component.html'
})
export class MessageComponent  implements OnInit {
    @Input()
    msg : Message;

    private getClass(): String{
        let level = this.msg.level;
        if(level== 0){
            return "alert alert-info";
        }else  if(level== 1){
            return "alert alert-warning";
        }else  if(level== 2){
            return "alert alert-danger";
        }else  if(level== 3){
            return "alert alert-success";
        }
    }

    ngOnInit(){
        // setTimeout(3000,()=> this.msg = null);
    }
}