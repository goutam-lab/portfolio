export default function MobileNotice() {
  return (
    <div
      className="notice"
      id="notice"
      role="dialog"
      aria-labelledby="noticeTitle"
      aria-describedby="noticeText"
      hidden
    >
      <svg className="notice-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M15.5 3.2A9 9 0 1 0 20.8 16 7 7 0 0 1 15.5 3.2Z"
          fill="#F2C230"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      <div className="notice-body">
        <p className="notice-title" id="noticeTitle">Experience Goutam's Portfolio on a bigger screen</p>
        <p className="notice-text" id="noticeText">
          To experience this interactive portfolio in its full potential, open it on a desktop browser.
        </p>
        <div className="notice-actions">
          <button type="button" id="noticeCopy">Copy link</button>
          <button type="button" id="noticeOk" className="solid">Continue here</button>
        </div>
      </div>
    </div>
  );
}
