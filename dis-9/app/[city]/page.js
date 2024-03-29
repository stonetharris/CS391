"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "@/components/weatherCard";
import styled from "styled-components";

const CityName = styled.h1``;

const WeatherCardsContainer = styled.div``;

const WeatherContentWrapper = styled.main``;

const CityPage = () => {
    const params = useParams();

    const res = useSWR(`/api/getWeatherData?city=${params.city}`, (url) => fetch(url).then((res) => res.json()));
    if (res.error) return <div>failed to load</div>;

    if (res.isLoading) return <div>loading</div>;

    // const days = res.data.days;
    const days = res.data?.days || [];

    return (
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardsContainer>
                {days.length > 0 ? (
                days.map((weather, i) => (
                <WeatherCard key={i} weather={weather} />
                ))
                ) : (
                <div>No weather data available</div>
                )}
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    );
};

export default CityPage;
