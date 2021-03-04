package com.example.movieinfoservice;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.movieinfoservice.models.Movie;

@RestController
@RequestMapping("/movies")
public class movieinformation {

	@RequestMapping("/{movieId}")
	public Movie getmovieinfo(@PathVariable("movieId")String movieId) {
		return new Movie(movieId,"Test name");
	}
}
