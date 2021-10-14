import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components';

interface ModalPorps {
  onBackdropClick: () => void;
}

const Overlay =styled.div`
  background-color: rgba(0,0,0,0.5);
  position:fixed;
  height:100%;
  width:100%;
  top: 0;
  left: 0;
  display: flex;
  align-items:center;
  justify-content: center;
`;

const  Modal: React.FC<ModalPorps> =({onBackdropClick, children}) => {
    return ReactDom.createPortal(<Overlay onClick={onBackdropClick}>
     <div onClick={e => e.stopPropagation()}>
         {children}
         </div>
    </Overlay>, document.getElementById('modal-root')!);
}

export default Modal