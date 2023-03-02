
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { CounterComponentForLab } from "src/app/lab/counter/counter.component";

describe("CounterComponentFolab", () => {
  let fixture: ComponentFixture<CounterComponentForLab>, obj: CounterComponentForLab;
  let btn;
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponentForLab ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponentForLab);
    obj = fixture.componentInstance;
     btn= fixture.debugElement.queryAll(By.css("button"));

  
  });

 
  it('should create', () => {
    expect(obj.counter).toBe(0)
  });
  it("click increse",()=>{

     btn= fixture.debugElement.queryAll(By.css("button"))[0]
     btn.triggerEventHandler("click")
     fixture.detectChanges()

    expect(obj.counter).toBe(1)
 
    let p=fixture.debugElement.queryAll(By.css("p"))[0].nativeElement;
    expect(p.textContent).toBe('1')
   
  })
  it("click decrease",()=>{
    btn= fixture.debugElement.queryAll(By.css("button"))[1]
    btn.triggerEventHandler("click")
    expect(obj.counter).toBe(-1)
  })
})



