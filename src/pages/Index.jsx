import React, { useState } from "react";
import { Box, VStack, Heading, Text, Input, Button, IconButton, Flex, Spacer, Divider, Image } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box p={4} maxW="400px" mx="auto">
      <VStack spacing={6} align="stretch">
        <Flex align="center">
          <Heading size="xl">Task Manager</Heading>
          <Spacer />
          <Image src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGljb258ZW58MHx8fHwxNzEwNTkxMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Task Manager" boxSize="50px" borderRadius="full" />
        </Flex>
        <Box>
          <Flex>
            <Input placeholder="Enter a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} mr={2} />
            <IconButton icon={<FaPlus />} onClick={handleAddTask} aria-label="Add Task" />
          </Flex>
        </Box>
        <Divider />
        <VStack spacing={4} align="stretch">
          {tasks.map((task, index) => (
            <Flex key={index} align="center">
              <Text>{task}</Text>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(index)} aria-label="Delete Task" />
            </Flex>
          ))}
        </VStack>
        <Button colorScheme="blue">Save Tasks</Button>
      </VStack>
    </Box>
  );
};

export default Index;
