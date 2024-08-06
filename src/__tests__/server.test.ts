describe('My first test', () => {
    it('1 + 1 it must be 2', () => {
        expect(1 + 1).toBe(2)
    })

    it('1 + 1 it mustnt be 3', () => {
        expect(1 + 1).not.toBe(3)
    })
})