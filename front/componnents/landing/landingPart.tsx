import classes from './LandingPart.module.scss';

const LandingPart: React.FC<{ text: string }> = (props) => {
  return (
    <section className={classes.part}>
      <p>{props.text}</p>
    </section>
  );
};

export default LandingPart;
