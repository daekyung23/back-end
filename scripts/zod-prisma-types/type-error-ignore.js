const fs = require('fs');
const path = require('path');

const targetFile = path.join(process.cwd(), 'src/lib/zod-prisma-types/index.ts');

function addTypeErrorIgnore() {
  try {
    let content = fs.readFileSync(targetFile, 'utf8');
    
    // 이미 @ts-nocheck이 있는지 확인
    if (!content.includes('// @ts-nocheck')) {
      // 파일 시작 부분에 @ts-nocheck 추가
      content = '// @ts-nocheck\n' + content;
      
      // 파일 쓰기
      fs.writeFileSync(targetFile, content);
      console.log('Successfully added @ts-nocheck to zod-prisma-types/index.ts');
    }
  } catch (error) {
    console.error('Error processing file:', error);
    process.exit(1);
  }
}

// 실행
addTypeErrorIgnore();