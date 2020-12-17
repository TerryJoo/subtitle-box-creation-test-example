const createSubtitleBox = require('./create-subtitle-box')


/**
 * 1번 케이스 테스트
 *
 * 결함이 있는 로직이지만, 케이스 테스트 성공
 */
test('Test subtitle box creation1', () => {
    /**
     * 생성 전 예시 값 입니다.
     *
     * @type subtitles: {start: number, end: number}[]
     */
    const BeforeCase1 = [{start: 2000, end:3600}, {start: 4000, end: 5912}]

    createSubtitleBox(0, BeforeCase1)
    const added = BeforeCase1[0]
    console.log(BeforeCase1)
    expect(BeforeCase1).toBeDefined()
    expect(Array.isArray(BeforeCase1)).toBe(true)
    expect(BeforeCase1.length).toBe(3)
    expect(added).toBeDefined()
    expect(added.start).toBe(0)
    expect(added.end).toBe(2000)
})

/**
 * 2번 케이스 테스트
 *
 * 로직 결함으로 인해, 실패
 */
test('Test subtitle box creation2', () => {
    /**
     * 생성 전 예시 값 입니다.
     *
     * @type subtitles: {start: number, end: number}[]
     */
    const BeforeCase2 = [{start: 2801, end:5024}, {start: 6216, end: 8133}]

    createSubtitleBox(1000, BeforeCase2)
    const added = BeforeCase2[0]
    console.log(BeforeCase2)
    expect(BeforeCase2).toBeDefined()
    expect(Array.isArray(BeforeCase2)).toBe(true)
    expect(BeforeCase2.length).toBe(3)
    expect(added).toBeDefined()
    expect(added.start).toBe(1000)
    expect(added.end).toBe(2801)
})

