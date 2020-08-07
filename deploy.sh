#!/usr/bin/env bash

helm upgrade --install x1-production kube --namespace production -f kube/production.yaml