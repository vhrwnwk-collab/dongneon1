# 이미지 추가 가이드

이 폴더(`public/images`)에 홈페이지에 넣고 싶은 이미지(예: 후기 캡처, 정산 입금 내역, 카드뉴스 등)를 넣어주세요.

## 사용 방법
1. 이미지 파일(예: `review1.png`, `proof1.jpg`)을 이 폴더에 저장합니다.
2. `src/data/config.ts` 파일의 `showcaseImages` 배열에 아래와 같이 이미지 경로를 넣어주시면 자동으로 홈페이지에 예쁘게 반영됩니다:

```typescript
export const SITE_CONFIG = {
  ...
  showcaseImages: [
    {
      src: "/images/review1.png", // 여기에 파일명 입력
      title: "실시간 정산 인증",
      description: "24시간 대여 종료 즉시 입금 완료된 실제 정산 내역입니다.",
      tag: "정산완료"
    },
    ...
  ]
}
```
이미지를 넣지 않아도 기본적으로 세련된 프레임 플레이스홀더 디자인이 깨지지 않고 노출됩니다.
