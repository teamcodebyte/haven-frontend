
export const FeatureSection = props => {

  return (
    <div className={`flex flex-row items-center justify-center w-full h-section ${props.background}`}>
      <div className="flex flex-col items-start justify-center mr-10 max-w-5xl">
        <h1 className="w-min mb-2 font-acumin font-bold xl:text-9xl 2xl:text-11xl text-gray-800 tracking-tight">{ props.title }</h1>
        <p className="mt-2 max-w-3xl font-inter font-medium xl:text-3xl 2xl:text-4xl text-gray-700">{ props.description }</p>
      </div>
      <img 
        draggable="false"
        className="ml-10"
        alt="Another cool image that shouldn't be missing"
        src={props.image}
      />
    </div>
  )

}
