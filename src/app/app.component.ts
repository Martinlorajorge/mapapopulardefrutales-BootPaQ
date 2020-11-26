import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';

import { SettingsService } from './services/core/settings/settings.service';
import { LoginService } from './services/login/login.service';
import { MessageService } from './services/message/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    username:string;
    isLogged:boolean;
    isAdmin:boolean;


    @HostBinding('class.layout-fixed') get isFixed() { return this.settings.getLayoutSetting('isFixed'); };
    @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.getLayoutSetting('isCollapsed'); };
    @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.getLayoutSetting('isBoxed'); };
    @HostBinding('class.layout-fs') get useFullLayout() { return this.settings.getLayoutSetting('useFullLayout'); };
    @HostBinding('class.hidden-footer') get hiddenFooter() { return this.settings.getLayoutSetting('hiddenFooter'); };
    @HostBinding('class.layout-h') get horizontal() { return this.settings.getLayoutSetting('horizontal'); };
    @HostBinding('class.aside-float') get isFloat() { return this.settings.getLayoutSetting('isFloat'); };
    @HostBinding('class.offsidebar-open') get offsidebarOpen() { return this.settings.getLayoutSetting('offsidebarOpen'); };
    @HostBinding('class.aside-toggled') get asideToggled() { return this.settings.getLayoutSetting('asideToggled'); };
    @HostBinding('class.aside-collapsed-text') get isCollapsedText() { return this.settings.getLayoutSetting('isCollapsedText'); };

    constructor(private loginService:LoginService, public settings: SettingsService, private oauthService: OAuthService,private messageService: MessageService) { }

    ngOnInit() {
        // prevent empty links to reload the page
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && ['', '#'].indexOf(target.getAttribute('href')) > -1)
                e.preventDefault();
        });
    }
    authConfig: AuthConfig = {
        // Url of the Identity Provider
        issuer: 'https://idsvr4.azurewebsites.net',//https://localhost:8080/auth/realms/MPF
     
        // URL of the SPA to redirect the user to after login
        redirectUri: window.location.origin,// + '/index.html',
     
        // The SPA's id. The SPA is registerd with this id at the auth-server
        // clientId: 'server.code',
        clientId: 'MPF-frontend',//'spa',
     
        // Just needed if your auth server demands a secret. In general, this
        // is a sign that the auth server is not configured with SPAs in mind
        // and it might not enforce further best practices vital for security
        // such applications.
        // dummyClientSecret: 'secret',
     
        responseType: 'code',
     
        // set the scope for the permissions the client should request
        // The first four are defined by OIDC.
        // Important: Request offline_access to get a refresh token
        // The api scope is a usecase specific one
        scope: 'openid profile email offline_access api',
     
        showDebugInformation: true,
      };
      configure():void{
        this.oauthService.configure(this.authConfig)
        this.oauthService.tokenValidationHandler=new NullValidationHandler();
        this.oauthService.setupAutomaticSilentRefresh();
        this.oauthService.loadDiscoveryDocument().then(()=> this.oauthService.tryLogin())
        .then(()=>{
            if(this.oauthService.getIdentityClaims()){
                this.isLogged=this.loginService.getIsLogged();
                this.isAdmin= this.loginService.getIsAdmin();
                this.username=this.loginService.getUsername();
                this.messageService.sendMessage(this.loginService.getUsername());
        }
    });
      }
      
      
}
