package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Movie;

public interface MovieRepository extends JpaRepository <Movie,Integer>{
Movie findByName(String name);
}
