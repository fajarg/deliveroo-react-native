import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCards from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCards
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoryCards
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 2"
      />
      <CategoryCards
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCards
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCards
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCards
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCards
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
    </ScrollView>
  )
}

export default Categories
