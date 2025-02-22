import MyGallery from './MyGallery';
import { Gallery } from 'react-photoswipe-gallery'
const Certification = ({title, issueBy, issueDate, imgSrc, width, height, isCompleted}) => {
    return(
        <div data-aos="fade-up" className="w-full mb-5 flex justify-between items-center pb-3 border-b-2 border-b-slate-400 dark:border-b-slate-400">
            <div className='w-10/12 sm:w-auto'>
                <h3 className="font-bold text-xl mb-3 text-slate-700 dark:text-slate-300">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-4">{issueBy}</p>
                {isCompleted ? <span className="block mt-4 text-slate-700 dark:text-slate-500">Issued {issueDate}</span> :<span className="block mt-4 text-green-700 dark:text-green-500">In progress...</span>}
                
            </div>
            <div className="w-32 h-[90px] bg-slate-600 rounded-md">
                <Gallery>
                    <MyGallery originalsrc={imgSrc} thumbnailSrc={imgSrc} alt={title} acctualWidth={width} acctualHeight={height}/>
                </Gallery>
            </div>
        </div>
    );
}
export default Certification;