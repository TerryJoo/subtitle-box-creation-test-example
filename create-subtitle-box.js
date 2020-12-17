function createSubtitleBox(now, subtitles) {
    const defaultEnd = 2000
    return subtitles.splice(0, 0, {start: now, end: defaultEnd})
}

module.exports = createSubtitleBox
