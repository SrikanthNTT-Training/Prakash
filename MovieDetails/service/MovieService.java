package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.entity.Movie;
import com.example.demo.respository.MovieRepository;

@Service
public class MovieService {
	 @Autowired
	    private MovieRepository repository;
	 
	 public Movie saveMovie(Movie movie) {
	        return repository.save(movie);
	    }
	 public List<Movie> saveMovies(List<Movie> movies) {
	        return repository.saveAll(movies);
	    }
	 
	 @GetMapping("/movies")
	 public List<Movie> getMovies() {
	        return repository.findAll();
	    }
	    public Movie getMovieById(int id) {
	        return repository.findById(id).orElse(null);
	    }
	    public Movie getMovieByName(String name) {
	        return repository.findByName(name);
	    }
	    @DeleteMapping("/delete/{id}")
	    public String deleteMovie(int id) {
	        repository.deleteById(id);
	        return "movie removed !! " + id;
	    }
        public Movie updateMovie(Movie movie) {
        	Movie existingMovie = repository.findById(movie.getId()).orElse(null);
	        existingMovie.setName(movie.getName());
	        existingMovie.setYear(movie.getYear());
	      
	        return repository.save(existingMovie);
	    }
		
	}


