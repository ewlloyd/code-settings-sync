//"use strict";
import { Environment } from './environmentPath';


export class ExtensionConfig {

    public token: string = null;
    public gist: string = null;
    public hostName: string = null;
    public protocol: string = null;
    public pathPrefix: string = null;
    public lastUpload: Date = null;
    public autoDownload: boolean = false;
    public autoUpload = false;
    public lastDownload: Date = null;
    public version: number = null;
    public showSummary: boolean = true;
    public forceDownload : boolean = false;
    public workspaceSync : boolean = false;
    public anonymousGist : boolean = false;
    constructor() {
        this.version = Environment.CURRENT_VERSION;
    }
}

export class LocalConfig {
    public publicGist: boolean = false;
    public userName: string = null;
    public name: string = null;
    public config: ExtensionConfig = null;
    public static readonly DEPTH : number = 2;
    constructor() {
        this.config = new ExtensionConfig();
    }
}

export class CloudSetting {
    public lastUpload: Date = null;
}
