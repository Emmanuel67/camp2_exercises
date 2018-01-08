--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: event_participants; Type: TABLE; Schema: public; Owner: Emmanuel
--

CREATE TABLE event_participants (
    id uuid NOT NULL,
    user_id uuid
);


ALTER TABLE event_participants OWNER TO "Emmanuel";

--
-- Name: events; Type: TABLE; Schema: public; Owner: Emmanuel
--

CREATE TABLE events (
    id uuid NOT NULL,
    label character varying(255),
    statut character varying(255),
    date date
);


ALTER TABLE events OWNER TO "Emmanuel";

--
-- Name: expenses; Type: TABLE; Schema: public; Owner: Emmanuel
--

CREATE TABLE expenses (
    id uuid NOT NULL,
    label character varying(255),
    user_id uuid,
    event_id uuid,
    amount integer
);


ALTER TABLE expenses OWNER TO "Emmanuel";

--
-- Name: expenses_beneficiaries; Type: TABLE; Schema: public; Owner: Emmanuel
--

CREATE TABLE expenses_beneficiaries (
    expenses_id uuid NOT NULL,
    user_id uuid,
    amount_charged integer,
    date date
);


ALTER TABLE expenses_beneficiaries OWNER TO "Emmanuel";

--
-- Name: users; Type: TABLE; Schema: public; Owner: Emmanuel
--

CREATE TABLE users (
    id uuid NOT NULL,
    email character varying(255),
    pseudo character varying(255),
    password character varying(255),
    tokenfacebook character varying(255)
);


ALTER TABLE users OWNER TO "Emmanuel";

--
-- Data for Name: event_participants; Type: TABLE DATA; Schema: public; Owner: Emmanuel
--

COPY event_participants (id, user_id) FROM stdin;
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: Emmanuel
--

COPY events (id, label, statut, date) FROM stdin;
\.


--
-- Data for Name: expenses; Type: TABLE DATA; Schema: public; Owner: Emmanuel
--

COPY expenses (id, label, user_id, event_id, amount) FROM stdin;
\.


--
-- Data for Name: expenses_beneficiaries; Type: TABLE DATA; Schema: public; Owner: Emmanuel
--

COPY expenses_beneficiaries (expenses_id, user_id, amount_charged, date) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: Emmanuel
--

COPY users (id, email, pseudo, password, tokenfacebook) FROM stdin;
\.


--
-- Name: event_participants Event Participants_pkey; Type: CONSTRAINT; Schema: public; Owner: Emmanuel
--

ALTER TABLE ONLY event_participants
    ADD CONSTRAINT "Event Participants_pkey" PRIMARY KEY (id);


--
-- Name: events Events_pkey; Type: CONSTRAINT; Schema: public; Owner: Emmanuel
--

ALTER TABLE ONLY events
    ADD CONSTRAINT "Events_pkey" PRIMARY KEY (id);


--
-- Name: expenses_beneficiaries Expenses beneficiaries_pkey; Type: CONSTRAINT; Schema: public; Owner: Emmanuel
--

ALTER TABLE ONLY expenses_beneficiaries
    ADD CONSTRAINT "Expenses beneficiaries_pkey" PRIMARY KEY (expenses_id);


--
-- Name: expenses Expenses_pkey; Type: CONSTRAINT; Schema: public; Owner: Emmanuel
--

ALTER TABLE ONLY expenses
    ADD CONSTRAINT "Expenses_pkey" PRIMARY KEY (id);


--
-- Name: users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: Emmanuel
--

ALTER TABLE ONLY users
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

