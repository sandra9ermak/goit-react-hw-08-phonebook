import s from "./Views.module.css";

const HomeView = () => {
  return (
    <div className={s.homePage}>
      <h1>Welcome to Phonebook!</h1>
      <p className={s.homeText}>here you can add your contacts</p>
    </div>
  );
};

export default HomeView;
