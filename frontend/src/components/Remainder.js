import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests

const ReminderButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleReminderButtonClick = async () => {
    setIsLoading(true);

    try {
      // Fetch only the 'deadline' column from MongoDB
      const response = await axios.get('http://127.0.0.1:3001/getTodoList', {
        params: {
          // Specify the fields you want to retrieve
          fields: 'deadline'
        }
      });
      const deadlines = response.data; // assuming deadlines are returned as an array of objects with a 'deadline' field

      // Logic to determine upcoming deadlines and days left
      const upcomingDeadlines = deadlines.filter(deadline => new Date(deadline.deadline) > new Date());
      const today = new Date();
      const upcomingDeadlinesWithDaysLeft = upcomingDeadlines.map(deadline => {
        const daysLeft = Math.ceil((new Date(deadline.deadline) - today) / (1000 * 60 * 60 * 24)); // calculate days left
        return {  daysLeft };
      });

      // Send notifications for upcoming deadlines (implementation depends on your notification system)

      // For demonstration, log upcoming deadlines with days left to console
      console.log("Upcoming deadlines with days left:", upcomingDeadlinesWithDaysLeft);
      let days=JSON.stringify(upcomingDeadlinesWithDaysLeft);
      
      
      
      alert("Upcoming deadlines with days left: " + days);
    } catch (error) {
      console.error('Error fetching deadlines:', error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={handleReminderButtonClick} disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Reminder Notifications'}
      </button>
    </div>
  );
};

export default ReminderButton;
