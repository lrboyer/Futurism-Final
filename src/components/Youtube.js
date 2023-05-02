const link = "https://www.youtube.com/embed/RzkD_rTEBYs"

const Youtube = () => {

    return (
        <iframe
          width="560"
          height="315"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen='true'
        >
        </iframe>
    )
}

export default Youtube