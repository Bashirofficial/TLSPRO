// App.jsx
import React from "react";
import { BackgroundBlogCard } from "./components/Card"; // Import your card component

function App() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {/* First Card with an Image and Text */}
      <BackgroundBlogCard
        imageUrl="https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="FOOTBALL"
      />

      {/* Second Card with a different image */}
      <BackgroundBlogCard
        imageUrl="https://plus.unsplash.com/premium_photo-1721963697056-e8cde3b8eb53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="CRICKET"
        backgroundPosition="0% 20%"
      />

      {/* Third Card without an image, will use a placeholder */}
      <BackgroundBlogCard
        imageUrl="https://cdn.pixabay.com/photo/2016/07/02/01/07/basketball-1492261_1280.jpg"
        text="BASKETBALL"
        backgroundPosition="0% 20%"
      />

      {/* Fourth Card */}
      <BackgroundBlogCard
        imageUrl="https://images.unsplash.com/photo-1541983663620-7571a820610c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="HOCKEY"
        backgroundPosition="30% 20%"
      />

      {/* Fifth Card */}
      <BackgroundBlogCard
        imageUrl="https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="BOXING"
      />

      {/* Sixth Card */}
      <BackgroundBlogCard
        imageUrl="https://images.pexels.com/photos/4114627/pexels-photo-4114627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        text="CHESS"
        backgroundPosition="50% 80%"
      />
      <BackgroundBlogCard
        imageUrl="https://images.unsplash.com/photo-1530028828-25e8270793c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="GOLF"
      />
      <BackgroundBlogCard
        imageUrl="https://cdn.pixabay.com/photo/2024/06/21/17/38/ai-generated-8844755_1280.jpg"
        text="MMA"
      />
      <BackgroundBlogCard
        imageUrl="https://images.unsplash.com/photo-1480099225005-2513c8947aec?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="RUGBY"
      />
      <BackgroundBlogCard
        imageUrl="https://images.unsplash.com/photo-1529768167801-9173d94c2a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="BASEBALL"
      />
      <BackgroundBlogCard
        imageUrl="https://images.pexels.com/photos/8007497/pexels-photo-8007497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        text="BADMINTON"
      />
      <BackgroundBlogCard
        imageUrl="https://images.pexels.com/photos/17538207/pexels-photo-17538207/free-photo-of-table-tennis-rackets-and-balls-lying-on-a-green-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        text="TABLE TENNIS"
      />
    </div>
  );
}

export default App;
