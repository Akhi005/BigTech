
import TechHomeCard from "./TechHomeCard";

const TechHome = ({loadedtechnology}) => {
    return (
        <div>
        <h1 className='text-4xl text-center mt-10 bg-green-900 text-white p-3'>Brand </h1>
      {
        <div className='grid md:grid-cols-3 mb-5 p-10 text-center'>  {
            loadedtechnology.map(tech => <TechHomeCard key={tech._id}
            tech={tech}  ></TechHomeCard>)
        }
        </div>

      }
        </div>
    );
};
export default TechHome;