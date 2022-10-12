export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSXです</p>
        <button className="button">Styled ボタン</button>
      </div>

      <style jsx>{`
        .container {
          border: solid 1px #aaa;
          border-radius: 20px;
          padding: 8px;
          margin: 9px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0px;
          color: rgb(0, 197, 89);
        }
        .button{
          background-color: #ddd;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
