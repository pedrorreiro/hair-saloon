export const ServiceFuncionaries = ({ data }) => {
    return (
        <div>
            <div className="funcionaries">
                {data.map((funcionary, index) => {
                    return (
                        <ul className="funcionary" key={index}>
                            <li>{funcionary.name}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}