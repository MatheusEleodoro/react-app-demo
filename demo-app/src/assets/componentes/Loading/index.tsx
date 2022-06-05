import '../Loading/styles.css'

type LoadingProps = {
    ativo?:boolean
  }

export const Loading = ({ativo}:LoadingProps) => {
    if(ativo) {
        return (
            <div className='loading'>
                <div className="loader">
                    <circle />
                    <circle />
                    <circle />
                    <circle />
                </div>
            </div>
        )
    }

    return (
        <></>
    )

}