
# React_basic
[프론트엔드의 꽃, 리액트](https://spartacodingclub.kr/online/react).

## Week2

### SCSS
* SASS: CSS 길이가 길어지는 부분을 개선함
* SCSS: SASS의 버전업, SASS의 CSS와 불안정한 호환성을 보완
* SCSS 사용: `yarn add node-sass@4.14.1 open-color sass-loader classnames`
* 특징
  1. CSS와 기본문법이 같음
  2. Nesting이 가능하여 블록을 통해 하위요소 선택 가능
      ```
      div p {
        ...
      }
      = div {
        p {
          ...
        } 
      }  
      ```

      ```
      축약형 가능
      p {
        font-family: ...
      }
      = font {
          family {
            ...
          }
        }  
      ```
  3. 상위 요소 이어쓰기는 &로 클래스명과 같은 글자 이어쓰기도 가능
      ```
      .div {
        &:hover {
          color: ...
        }
        &_info {
          ...
        }
      } 
      ```
  4. 문자열 치환가능: 변수 사용이 가능
      ```
      $color: red;
      $className: info;
      .div {
        color: #{$color};
        &.#{$className} {
          ...
        }  
      }  
      ```
        

