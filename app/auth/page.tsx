export default function AuthPage() {
  return (
    <div className="section">
      <h2 style={{ marginTop: 0 }}>SNS 로그인 / 회원가입</h2>
      <p className="muted">아래 버튼들은 OAuth 연동 시뮬레이션을 위한 UI 자리표시자입니다.</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button className="button primary">카카오로 시작하기</button>
        <button className="button" style={{ background: '#111', color: 'white' }}>
          애플로 시작하기
        </button>
        <button className="button" style={{ background: '#34a853', color: 'white' }}>
          구글 로그인
        </button>
        <button className="button" style={{ background: '#03c75a', color: 'white' }}>
          네이버 로그인
        </button>
      </div>
      <p className="muted" style={{ marginTop: 12 }}>
        SNS 로그인 성공 시 사용자 정보 동의 및 추가 정보(전화번호, 약관) 수집 단계를 연결하세요.
      </p>
    </div>
  );
}
