const link = "https://www.youtube.com/embed/RzkD_rTEBYs"

const Youtube = () => {

    return (
        <div className='bg-gray-700 flex p-10 rounded-md'>
          <iframe
            width="475"
            height="300"
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          >
          </iframe>
        </div>
    )
}

export default Youtube