import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ProviderToken } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { HeroService } from "src/app/services/hero service/hero.service";
import { MessageService } from "src/app/services/message/message.service";
  describe("hero service:",()=>{
    let mockMsgService:MessageService,service:HeroService,httpServiceControler:HttpTestingController 
    beforeEach((() => {
        mockMsgService=jasmine.createSpyObj(["add"])
        TestBed.configureTestingModule({
          providers:[HeroService,
            {provide:MessageService,useValue:mockMsgService},
        ],
        imports:[HttpClientTestingModule]
        })
       service= TestBed.inject(HeroService)
       httpServiceControler= TestBed.inject(HttpTestingController )
      }));
    it("Test Api",()=>{    
        service.getHeroes().subscribe({next:(data)=>{
            expect(data);
        },error:()=>{}})
       let req= httpServiceControler.expectOne("api/heroes")
        httpServiceControler.verify()
        expect(req.request.method).toBe("GET")
    })
})