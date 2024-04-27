export default async function handler(req, res) {
    // 외부 API의 URL을 구성
    const apiUrl = `https://www.pathofexile.com/api/trade/search/Necropolis`;

    try {
        const apiResponse = await fetch(apiUrl, {
            method: req.method, // 원본 요청의 HTTP 메소드를 유지
            headers: {
                'Content-Type': 'application/json',
                // 필요한 경우, 추가적인 헤더들을 여기에 포함
            },
            body: req.method !== 'GET' ? JSON.stringify(req.body) : null,
        });

        const data = await apiResponse.json();

        // API 응답을 클라이언트로 전달
        res.status(apiResponse.status).json(data);
    } catch (error) {
        // 에러 처리
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}