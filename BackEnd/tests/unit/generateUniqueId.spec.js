const generatedUniqued = require('../../src/utils/generateUniqueId');


describe('Generate Unique ID', () => {
    it('should generated a unique ID', () => {
        const id = generatedUniqued();

        expect(id).toHaveLength(8);
        
    });
})