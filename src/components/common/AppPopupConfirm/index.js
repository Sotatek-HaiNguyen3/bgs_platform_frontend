import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import cn from "classnames";

import CloseIcon from "components/svg/close";
import s from "./style.module.scss";

const CreateEntityModal = ({
  modalIsOpen,
  closeModal,
  onAccept,
  title,
  content,
  contentLabel,
  acceptButtonText,
  declineButtonText,
  hasClose,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel={contentLabel}
      className="Modal"
      overlayClassName="Overlay"
      shouldCloseOnOverlayClick
      ariaHideApp={false}
    >
      <section className={cn("modal modal__confirm", s.modal__confirm)}>
        {hasClose && (
          <button type="button" className="modal__exit" onClick={closeModal}>
            <CloseIcon />
          </button>
        )}

        <div className={s.modal__confirm_title}>{title}</div>
        <div className={s.modal__confirm_content}>
          <div>{content}</div>
        </div>
        <div className={s.modal__confirm_buttons}>
          <button
            className={cn(
              "link link--shrink decline",
              s.modal__confirm_decline
            )}
            type="button"
            onClick={closeModal}
          >
            {declineButtonText}
          </button>
          <button
            className={cn("button-raw accept", s.modal__confirm_accept)}
            type="button"
            onClick={onAccept}
          >
            {acceptButtonText}
          </button>
        </div>
      </section>
    </Modal>
  );
};

CreateEntityModal.defaultProps = {
  title: "",
  contentLabel: "",
  inputPlaceholder: "",
  acceptButtonText: "Create",
  declineButtonText: "Cancel",
  hasClose: true,
};

CreateEntityModal.propTypes = {
  title: PropTypes.string,
  contentLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  acceptButtonText: PropTypes.string,
  declineButtonText: PropTypes.string,
  hasClose: PropTypes.bool,
};

export default CreateEntityModal;
