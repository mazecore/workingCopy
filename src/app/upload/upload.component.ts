import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  title = 'app';

  public uploader: FileUploader = new FileUploader ({url: URL, itemAlias: 'photo'});


  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response: any, status: any, headers: any) => {
      console.log('ImageUpload: uploaded:', item, status, response);
      alert('GREAT SUCCESS!!');
    };
    

  }
}  