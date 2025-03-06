// 각 스킬의 레벨을 데이터로 설정
const skillLevels = {
    "HTML": 90,
    "CSS": 90,
    "JavaScript": 90,
    "jQuery": 75,
    "React": 85,
    "Node.js": 75,
    "MySQL": 85,
    "Java": 60,
    "Rscript": 90,
    "SAS": 75,
    "Premiere": 85
  };
  
  const typingContainer = document.getElementById('typing-container');
  
  // 각 skill에 대해 마우스를 올렸을 때 그래프 및 타이핑 애니메이션 적용
  document.querySelectorAll('.skill').forEach(skill => {
    const skillName = skill.querySelector('.skill-name').innerText;
    const graph = skill.querySelector('.graph');
    const tooltip = skill.querySelector('.tooltip');
    
    const skillLevel = skillLevels[skillName];
  
    let typingText = '';
    switch(skillName) {
      case 'HTML':
        typingText = 'HTML로 웹페이지의 구조를 작성할 수 있습니다.';
        break;
      case 'CSS':
        typingText = 'CSS로 웹페이지의 스타일을 디자인할 수 있습니다.';
        break;
      case 'JavaScript':
        typingText = 'JavaScript로 웹페이지에 동적인 요소를 추가할 수 있습니다.';
        break;
      case 'jQuery':
        typingText = 'jQuery로 DOM 조작을 빠르게 처리할 수 있습니다.';
        break;
      case 'React':
        typingText = 'React로 효율적인 UI 컴포넌트를 만들 수 있습니다.';
        break;
      case 'Node.js':
        typingText = 'Node.js로 서버 사이드 개발을 할 수 있습니다.';
        break;
      case 'MySQL':
        typingText = 'MySQL로 데이터베이스를 관리하고 쿼리를 작성할 수 있습니다.';
        break;
      case 'Java':
        typingText = 'Java로 객체 지향 프로그래밍에 대해 공부했습니다.';
        break;
      case 'Rscript':
        typingText = 'Rscript로 데이터를 분석하고 시각화할 수 있습니다.';
        break;
      case 'SAS':
        typingText = 'SAS로 데이터 분석 및 통계 작업을 할 수 있습니다.';
        break;
      case 'Premiere':
        typingText = 'Premiere로 동영상 편집 및 효과를 추가할 수 있습니다.';
        break;
    }
  
    skill.addEventListener('mouseenter', () => {
      // 그래프의 너비와 툴팁 업데이트
      graph.style.width = `${skillLevel}%`;
      tooltip.innerText = `${skillName} - ${skillLevel}%`;
      tooltip.style.display = 'block';
  
      // 타이핑 애니메이션 초기화
      clearTimeout(typingTimeout);
      typingContainer.innerText = '';
      typingContainer.style.display = 'block';
      typeText(typingText);
    });
  
    skill.addEventListener('mouseleave', () => {
      // 그래프 초기화 및 툴팁 숨기기
      graph.style.width = '0%';
      tooltip.style.display = 'none';
      typingContainer.style.display = 'none';
    });
  });
  
  let typingTimeout;
  function typeText(text, index = 0) {
    if (index < text.length) {
      typingContainer.innerText += text.charAt(index);
      typingTimeout = setTimeout(() => typeText(text, index + 1), 100);
    }
  }
  