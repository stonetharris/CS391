import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {gql} from '@apollo/client';

// Add GET_STUDENT Mutation here
const GET_STUDENTS_QUERY = gql`
    query GetStudents {
        students {
            id
            firstName
            lastName
        }
    }
`;

export default function DisplayStudents(){

    // Invoke Apollo's useQuery() Hook here
    const { data, loading, error } = useQuery(GET_STUDENTS_QUERY);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View>
            <Text>Students</Text>
            {
                data.students.map((student) =>
                    (
                        <View key={student.id}>
                            <Text>{student.firstName} {student.lastName}</Text>
                        </View>
                    )
                )
            }
        </View>
    );
}


