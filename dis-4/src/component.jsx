import useSWR from "swr";

export function Unidata() {
    const { data, error } =
        useSWR(
            'http://universities.hipolabs.com/search?country=United+States',
            (url) =>
                fetch(url).then((res) => res.json())
        );

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div className='row'>
            {data.map((uni) => (
                <div key={uni.name}>{uni.name}</div>
            ))}
        </div>
    );
}