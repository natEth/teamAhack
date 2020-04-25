import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import Cropper from "cropperjs";
declare var Tesseract;

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {

  @ViewChild("image", { static: false })
    public imageElement: ElementRef;
    Result = 'Recognizing...';

    @Input("src")
    public imageSource: string;

    public imageDestination: string;
    private cropper: Cropper;

    public constructor() {
        this.imageDestination = "";
        // this. test();          
    }

    // test(){
    //   Tesseract.recognize('assets/Images/TestDemo.png').then(function(result){         
    //     alert(result.text);      
    //     });    
    // }
    public ngAfterViewInit() {
        this.cropper = new Cropper(this.imageElement.nativeElement, {
            zoomable: false,
            scalable: false,
            crop: () => {
                const canvas = this.cropper.getCroppedCanvas();
                this.imageDestination = canvas.toDataURL("image/png");
                console.log(this.imageDestination);
                Tesseract.recognize(this.imageDestination).then(function(result){         
                  alert(result.text);      
                  });  
            }
        });
    }

    public ngOnInit() { }

}
