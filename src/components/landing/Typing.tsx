import Typed from 'typed.js';
import React from 'react';
import styled from 'styled-components';

const Element = styled.span`
  text-align: center;
`;

const words: string[] = ['Invoice', 'Receive Payment', 'Withdraw Easily'];

class Typing extends React.Component {
  private el: HTMLSpanElement | null = null; // Ref for the span element
  private typed!: Typed; // Typed instance

  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };
    this.typed = new Typed(this.el!, options);
  }

  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  render() {
    return (
      <>
        <Element
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default Typing;
