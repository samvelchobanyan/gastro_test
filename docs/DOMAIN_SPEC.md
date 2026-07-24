# Domain Specification

## Purpose

This document defines the **conceptual domain model** of the  Application.

It describes:
- what domain entities exist
- what they represent
- key invariants and relationships

This document **does NOT** define:
- entity fields or constructors
- JSON / API shapes
- persistence or infrastructure
- UI or presentation concerns

All structural and technical rules are defined in `ARCHITECTURE_SPEC.md`.

---

## Domain Principles

- Domain entities are **pure business concepts**
- They are **immutable value objects**
- They are **independent of API, JSON, HTTP, and storage**
- Domain logic must not depend on the data or presentation layers

---
---

## Non-Goals

The domain layer does **not**:
- handle API communication
- parse JSON or DTOs
- manage playback state
- manage UI state
- store persistence or cache data

---

## Relation to Architecture Specification

- Structural rules and constraints are defined in `ARCHITECTURE_SPEC.md`
- Entity implementation details (Freezed, immutability) are defined there
- Concrete fields and constructors are defined in code, not in this document

---

End of DOMAIN_SPEC.md