import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
    imgSet: string = 'stage' // stage || interior || exterior
    activeFiles: string[];
    title: string;
    stageFiles: string[] = [
        'stg1', 'stg2', 'stg3', 'stg4', 'stg6', 'stg7',
         'stg8', 'stg9', 'stg10', 'stg11', 'stg12', 'stg13'
    ];
    interiorFiles: string[] = [
        'int3', 'int13', 'int1', 'int4', 'int5', 'int6',
        'int7', 'int8', 'int9', 'int10', 'int11', 'int12',
        'int14', 'int15', 'int2', 'int16', 'int17', 'int18',
        'int19', 'int20', 'int21', 'int21', 'int22', 'int23',
        'int24', 'int25', 'int26', 'int27', 'int28', 'int29',
        'int30', 'int31', 'int44', 'int45', 'int46', 'int47',
        'int47', 'int48', 'int49', 'int50', 'int51', 'int52'
    ];
    exteriorFiles: string[] = [
        'ext1', 'ext2', 'ext3', 'ext4', 'ext5', 'ext6',
        'ext7', 'ext8', 'ext9', 'ext10', 'ext11', 'ext12',
        'ext13', 'ext14', 'ext15', 'ext16', 'ext17', 'ext18',
        'ext19', 'ext20', 'ext21', 'ext22', 'ext23', 'ext24',
        'ext25', 'ext26', 'ext27', 'ext28', 'ext29', 'ext30',
        'ext31', 'ext32', 'ext33', 'ext34', 'ext35', 'ext36',
        'ext37', 'ext38', 'ext39', 'ext40', 'ext41', 'ext42'
    ];

    constructor() {
        this.imgSet = 'stage';
        this.setTitle();
        this.buildFileNames();
    }

    ngOnInit() {
    }

    public setImages(imgSet: string) {
        this.imgSet = imgSet;
        this.setTitle();
        this.buildFileNames();
    }

    private buildFileNames() {
        this.activeFiles = [];
        let filenames: string[];
        if (this.imgSet == 'stage') {
            filenames = this.stageFiles;
        }
        else if (this.imgSet == 'interior') {
            filenames = this.interiorFiles;
        }
        else if (this.imgSet == 'exterior') {
            filenames = this.exteriorFiles;
        }
        for (let i = 0; i < filenames.length; i++) {
            this.activeFiles.push('/assets/image/' + filenames[i] + '.jpg');
        }
    }

    private setTitle() {
        if (this.imgSet == 'stage') {
            this.title = "Images - Stage";
        }
        else if (this.imgSet == 'interior') {
            this.title = "Images - Interior";
        }
        else if (this.imgSet == 'exterior') {
            this.title = "Images - Exterior";
        }
    }
}
