import React from 'react';
import MediaQuery from 'react-responsive';
import BaseModalWrapper,{ BaseModalWrapperProps} from './BaseModalWrapper';
import { DesktopCloseButton,DesktopModalContainer, MobileCloseButton ,MobileModelContainer} from './ModalPopup.styles';

 type RWDModalProps = BaseModalWrapperProps; 

const RWDModal: React.FC<RWDModalProps> = (Props) => {
    return (<MediaQuery minWidth={580}>
        {(matches: any) => matches ? (
          <BaseModalWrapper 
               CloseButtonComponent={DesktopCloseButton}
               ContainerComponent ={DesktopModalContainer}
               {...Props}
          />
        ): (
              <BaseModalWrapper 
               CloseButtonComponent={MobileCloseButton}
               ContainerComponent ={MobileModelContainer}
               {...Props}
               />
            )
    }
    </MediaQuery>);
}

export default RWDModal;