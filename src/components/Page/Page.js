import './Page.css';
export const Page = (props) => {
  return (
    <div className="page">
        {props.children}
    </div>
  );
};
