import { SquarePipe } from "./square.pipe";

describe("squre pipe",()=>{
    let pip=new SquarePipe();
    beforeEach(()=>{
        pip=new SquarePipe();
    })
    it("should return not found",()=>{
        expect(pip.transform('x')).toBe('Not a number');

    })
    it("should return number",()=>{
        expect(pip.transform(2)).toEqual(jasmine.any(Number));
    })
   
    it("should squre the number",()=>{
        expect(pip.transform(2)).toBe(4);
    })
   
   


})