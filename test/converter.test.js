import converter from "../converter.js";

describe('Converter suit of test', ()=>{
    it('should be a function with international system',()=>{
        
        expect(typeof converter.international).toBe('function')
    });

    const numberInternational = converter.international('1234');

    it('should return a object after use international system ',()=>{
        expect(typeof numberInternational).toBe('object')
    });

    it('should return a object result of 1234 with international system',()=>{
        expect(numberInternational).toEqual({metre:12.34, kilometer:0.01234})
    });

    it('should have a length of 2 elements',()=>{
        expect(Object.entries(numberInternational)).toHaveLength(2)
    });

    it('should be a function  with imperial system',()=>{
        
        expect(typeof converter.imperial).toBe('function')
    });

    const numberImperial = converter.imperial('1234');

    it('should return a object after use imperial system ',()=>{
        expect(typeof numberImperial).toBe('object')
    });

    it('should return a object result of 1234 with imperial system',()=>{
        expect(numberImperial).toEqual({inch:485.827034, foot:40.4855656, yard: 13.4951474})
    });
})